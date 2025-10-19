import { useState, useEffect } from 'react';

export const useFeeCalculation = () => {
  const [feePerPerson, setFeePerPerson] = useState<string>('5');
  const [collectedAmount, setCollectedAmount] = useState<string>('0');
  const [payingAmount, setPayingAmount] = useState<string>('');

  const fee = parseFloat(feePerPerson) || 0;
  const collected = parseFloat(collectedAmount) || 0;
  const paying = parseFloat(payingAmount) || 0;

  const getChangeDenominations = (amount: number) => {
    const denominations = [200, 100, 50, 20, 10, 5, 1, 0.5, 0.25];
    const result: { [key: number]: number } = {};
    let remaining = amount;

    for (const denom of denominations) {
      if (remaining >= denom) {
        const count = Math.floor(remaining / denom);
        result[denom] = count;
        remaining = parseFloat((remaining - count * denom).toFixed(2));
      }
    }

    return result;
  };

  const calculateTotals = (passengerCount: number) => {
    const totalExpected = fee * passengerCount;
    const remaining = Math.max(0, totalExpected - collected);
    const changeDue = Math.max(0, paying - fee);
    const progress = totalExpected > 0 ? (collected / totalExpected) * 100 : 0;
    
    return {
      totalExpected,
      remaining,
      changeDue,
      progress,
      changeDenominations: changeDue > 0 ? getChangeDenominations(changeDue) : {}
    };
  };

  const updateCollectedAmount = (amount: string) => {
    setCollectedAmount(amount);
  };

  const updatePayingAmount = (amount: string) => {
    setPayingAmount(amount);
  };

  const resetPayingAmount = () => {
    setPayingAmount('');
  };

  return {
    feePerPerson,
    setFeePerPerson,
    collectedAmount,
    setCollectedAmount,
    payingAmount,
    setPayingAmount,
    calculateTotals,
    updateCollectedAmount,
    updatePayingAmount,
    resetPayingAmount
  };
};
