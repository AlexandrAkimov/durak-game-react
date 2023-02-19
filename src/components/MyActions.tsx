import * as React from 'react';

interface IMyActionsProps {
  isMyAttack: boolean,
  onRepulsed: () => void
  onGetCard: () => void
}

const MyActions: React.FC<IMyActionsProps> = ({ isMyAttack, onRepulsed, onGetCard }) => {

  const classes = ['btn-actions']
  if (!isMyAttack) {
    classes.push('red-btn')
  }
  return (
    <button
      className={classes.join(' ')}
      onClick={isMyAttack ? onRepulsed : onGetCard}
    >
      {isMyAttack ? 'Бито' : 'Беру'}
    </button>

  );
};

export default MyActions;
