import React, { useState, useRef } from 'react';
import { X, Plus, Edit, Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
// import { contentApi } from '../../api/contentApi';
import * as contentApi from '../../api/policyApi';
export const ListManagementModal = ({ title, items, onClose, onSave, renderForm, itemTitleKey, fileKeys = [] }) => {
  const [currentItems, setCurrentItems] = useState(items);
  const [editingItem, setEditingItem] = useState(null); // The item object to edit
  const [isSaving, setIsSaving] = useState(false);
  const formRef = useRef(null);

  const handleAddNew = () => {
    setEditingItem({ id: uuidv4(), isNew: true }); // Use isNew flag
  };

  const handleEdit = (item) => {
    setEditingItem(JSON.parse(JSON.stringify(item))); // Deep copy
  };

  const handleDelete = async (itemToDelete) => {
    if (!window.confirm(`Are you sure you want to delete "${itemToDelete[itemTitleKey] || 'this item'}"?`)) return;
    
    setIsSaving(true);
    try {
      // Delete any associated files
      for (const key of fileKeys) {
        if (itemToDelete[`${key}_storage_path`]) {
          await contentApi.deleteFile(itemToDelete[`${key}_storage_path`]);
        }
      }
      
      const newItems = currentItems.filter(i => i.id !== itemToDelete.id);
      await onSave(newItems); // Save deletion immediately
      setCurrentItems(newItems);
      
    } catch (err) {
      console.error('Failed to delete item:', err);
      alert('Failed to delete item.');
    } finally {
      setIsSaving(false);
    }
  };

  // This handles the form submission for BOTH add and edit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    let updatedItem = { ...editingItem };
    
    try {
      // Handle file uploads
      const fileInputs = formRef.current.querySelectorAll('.file-input');
      for (const input of fileInputs) {
        const file = input.files[0];
        if (file) {
          const key = input.dataset.key; // e.g., 'video' or 'logo'
          const oldStoragePath = items.find(i => i.id === updatedItem.id)?.[`${key}_storage_path`];
          
          const { publicUrl, storagePath } = await contentApi.updateFile(file, oldStoragePath);
          updatedItem[`${key}_url`] = publicUrl;
          updatedItem[`${key}_storage_path`] = storagePath;
        }
      }
      
      delete updatedItem.isNew; // Clean up flag

      let newItemsArray;
      if (items.find(i => i.id === updatedItem.id)) { // It's an update
        newItemsArray = currentItems.map(i => i.id === updatedItem.id ? updatedItem : i);
      } else { // It's a new item
        newItemsArray = [...currentItems, updatedItem];
      }
      
      await onSave(newItemsArray); // Save the entire new array
      setCurrentItems(newItemsArray);
      setEditingItem(null); // Close the form
    } catch (err) {
      console.error(err);
      alert('Failed to save item.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg max-h-[90vh] overflow-y-auto text-gray-900">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <button onClick={onClose}><X /></button>
        </div>

        {/* --- Add/Edit Form --- */}
        {editingItem ? (
          <form ref={formRef} onSubmit={handleFormSubmit} className="p-4 my-4 border rounded-lg">
            <h3 className="text-lg font-semibold">{editingItem.isNew ? 'Add New Item' : `Edit Item`}</h3>
            <div className="flex flex-col gap-2 mt-2">
              {renderForm(editingItem, setEditingItem, editingItem.isNew)}
            </div>
            <div className="flex gap-2 mt-4">
              <button type="submit" disabled={isSaving} className="px-4 py-1 text-white bg-green-600 rounded">{isSaving ? 'Saving...' : 'Save'}</button>
              <button type="button" onClick={() => setEditingItem(null)} className="px-4 py-1 text-white bg-gray-500 rounded">Cancel</button>
            </div>
          </form>
        ) : (
          <button onClick={handleAddNew} className="flex items-center gap-2 px-4 py-2 my-4 text-white bg-blue-600 rounded">
            <Plus size={18} /> Add New Item
          </button>
        )}

        {/* --- List of Current Items --- */}
        <div className="space-y-2">
          {currentItems.map(item => (
            <div key={item.id} className="flex items-center justify-between p-2 border rounded-lg">
              <span className="font-semibold">{item[itemTitleKey] || 'New Item'}</span>
              <div className="flex gap-2">
                <button onClick={() => handleEdit(item)} disabled={isSaving} className="p-1 text-blue-600 disabled:text-gray-400"><Edit size={16} /></button>
                <button onClick={() => handleDelete(item)} disabled={isSaving} className="p-1 text-red-600 disabled:text-gray-400"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
