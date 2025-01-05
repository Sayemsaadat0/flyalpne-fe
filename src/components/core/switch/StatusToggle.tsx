import { Switch } from '@/components/ui/switch';
import { FC } from 'react';

type StatusToggleProps = {
  isLoading?: boolean;
  status?: string;
  mutateAsync: Function;
};

const StatusToggle: FC<StatusToggleProps> = ({ isLoading, status, mutateAsync }) => {
  const handleSwitch = async () => {
    try {
      if (status === 'ACTIVE') {
        await mutateAsync({ status: 'INACTIVE' });
        alert('Inactivated');
      } else {
        await mutateAsync({ status: 'ACTIVE' });
        alert('Activated');
      }
    } catch (error) {
      console.error('Error toggling status:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Switch onClick={handleSwitch} checked={status === 'ACTIVE'} id="status-toggle" />
      )}
    </div>
  );
};

export default StatusToggle;
