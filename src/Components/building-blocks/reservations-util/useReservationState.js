import { useState, useEffect, useCallback } from 'react';

const useReservationState = (handleClick) => {
  const [isActive, setIsActive] = useState(false);
  const [reservationState, setReservationState] = useState({
    guests: '2',
    date: new Date(),
    dateTimeslots: {},
    dateSelectedTimes: {},
    name: '',
    email: '',
    reservationComplete: false,
  });

  const cleanup = useCallback(() => {
    document.body.style.overflow = 'unset';
    document.body.style.pointerEvents = 'auto';
  }, []);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => setIsActive(true), 50);
    return () => {
      clearTimeout(timer);
      cleanup();
    };
  }, [cleanup]);

  const handleClose = useCallback(() => {
    setIsActive(false);
    setTimeout(() => {
      handleClick();
      cleanup();
      setReservationState((prev) => ({ ...prev, reservationComplete: false }));
    }, 300);
  }, [handleClick, cleanup]);

  const handleOverlayClick = useCallback((e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);

  const updateReservationState = useCallback((updates) => {
    setReservationState((prev) => {
      const newState = { ...prev };
      if (typeof updates === 'function') {
        return { ...newState, ...updates(newState) };
      }
      if (updates.date && updates.date !== prev.date) {
        newState.dateSelectedTimes = {};
      }
      return { ...newState, ...updates };
    });
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    // const formattedDate = reservationState.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' });
    // const formattedTime = reservationState.dateSelectedTimes[formattedDate];
    // alert(JSON.stringify({
    //   ...reservationState,
    //   date: formattedDate,
    //   selectedTimes: formattedTime || []
    // }, null, 2));
    setReservationState((prev) => ({ ...prev, reservationComplete: true }));
  }, [reservationState]);

  return {
    isActive,
    handleClose,
    handleOverlayClick,
    reservationState,
    updateReservationState,
    handleSubmit
  };
};

export default useReservationState;