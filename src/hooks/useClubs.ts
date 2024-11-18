import { useState, useEffect } from 'react';
import { collection, query, getDocs, addDoc, updateDoc, doc, deleteDoc, where } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Club } from '../types';
import toast from 'react-hot-toast';

export function useClubs() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchClubs();
  }, []);

  const fetchClubs = async () => {
    try {
      const clubsRef = collection(db, 'clubs');
      const querySnapshot = await getDocs(clubsRef);
      const clubsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      })) as Club[];
      setClubs(clubsData);
    } catch (error) {
      console.error('Error fetching clubs:', error);
      toast.error('Failed to fetch clubs');
    } finally {
      setLoading(false);
    }
  };

  const createClub = async (clubData: Omit<Club, 'id' | 'createdAt'>) => {
    try {
      const docRef = await addDoc(collection(db, 'clubs'), {
        ...clubData,
        createdAt: new Date(),
        members: [clubData.adminId]
      });
      toast.success('Club created successfully');
      await fetchClubs();
      return docRef.id;
    } catch (error) {
      console.error('Error creating club:', error);
      toast.error('Failed to create club');
      throw error;
    }
  };

  const updateClub = async (clubId: string, updates: Partial<Club>) => {
    try {
      await updateDoc(doc(db, 'clubs', clubId), updates);
      toast.success('Club updated successfully');
      await fetchClubs();
    } catch (error) {
      console.error('Error updating club:', error);
      toast.error('Failed to update club');
      throw error;
    }
  };

  const deleteClub = async (clubId: string) => {
    try {
      await deleteDoc(doc(db, 'clubs', clubId));
      toast.success('Club deleted successfully');
      await fetchClubs();
    } catch (error) {
      console.error('Error deleting club:', error);
      toast.error('Failed to delete club');
      throw error;
    }
  };

  return {
    clubs,
    loading,
    createClub,
    updateClub,
    deleteClub,
    refreshClubs: fetchClubs
  };
}