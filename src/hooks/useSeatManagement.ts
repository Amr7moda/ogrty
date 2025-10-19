import { useState } from 'react';
import type { SeatStatus, VehicleType } from '../types';

export const useSeatManagement = (vehicleType: VehicleType, onSeatPaid?: (feePerPerson: number) => void) => {
  const [seatStatus, setSeatStatus] = useState<SeatStatus>({});

  const getSeatRows = () => {
    const rows = [];
    
    if (vehicleType === 'microbus') {
      // Microbus: 2 front + 4 rows of 4 seats = 18 total seats
      rows.push({ leftSeats: [3, 4], rightSeats: [5, 6] }); // Row 1: 4 seats
      rows.push({ leftSeats: [7, 8], rightSeats: [9, 10] }); // Row 2: 4 seats  
      rows.push({ leftSeats: [11, 12], rightSeats: [13, 14] }); // Row 3: 4 seats
      rows.push({ leftSeats: [15, 16], rightSeats: [17, 18] }); // Row 4: 4 seats
    } else {
      // Minibus: 2 front + 8 rows of 4 seats = 34 total seats
      for (let i = 0; i < 8; i++) {
        const startSeat = 3 + (i * 4);
        rows.push({ 
          leftSeats: [startSeat, startSeat + 1], 
          rightSeats: [startSeat + 2, startSeat + 3] 
        });
      }
    }
    
    return rows;
  };

  const getSeatStatus = (seatNumber: number) => {
    return seatStatus[seatNumber] || 'empty';
  };

  const toggleSeat = (seatNumber: number, feePerPerson: number = 0) => {
    setSeatStatus(prev => {
      const currentStatus = prev[seatNumber] || 'empty';
      let newStatus: 'empty' | 'occupied' | 'paid';
      
      if (currentStatus === 'empty') {
        newStatus = 'occupied';
      } else if (currentStatus === 'occupied') {
        newStatus = 'paid';
        // Auto-calculate collected amount when seat is marked as paid
        if (onSeatPaid && feePerPerson > 0) {
          onSeatPaid(feePerPerson);
        }
      } else {
        newStatus = 'empty';
      }
      
      return { ...prev, [seatNumber]: newStatus };
    });
  };

  const markAllPaid = (feePerPerson: number = 0) => {
    const newSeatStatus: SeatStatus = {};
    let totalToAdd = 0;
    
    Object.keys(seatStatus).forEach(seatNum => {
      if (seatStatus[parseInt(seatNum)] === 'occupied') {
        newSeatStatus[parseInt(seatNum)] = 'paid';
        totalToAdd += feePerPerson;
      } else {
        newSeatStatus[parseInt(seatNum)] = seatStatus[parseInt(seatNum)];
      }
    });
    
    setSeatStatus(newSeatStatus);
    
    // Auto-calculate collected amount for all newly paid seats
    if (onSeatPaid && totalToAdd > 0) {
      onSeatPaid(totalToAdd);
    }
  };

  const resetAll = () => {
    setSeatStatus({});
  };

  const getStatistics = () => {
    const paidPassengers = Object.values(seatStatus).filter(status => status === 'paid').length;
    const occupiedPassengers = Object.values(seatStatus).filter(status => status === 'occupied' || status === 'paid').length;
    const totalSeats = vehicleType === 'microbus' ? 18 : 34;
    
    return {
      paidPassengers,
      occupiedPassengers,
      emptySeats: totalSeats - occupiedPassengers
    };
  };

  return {
    seatStatus,
    getSeatRows,
    getSeatStatus,
    toggleSeat,
    markAllPaid,
    resetAll,
    getStatistics
  };
};
