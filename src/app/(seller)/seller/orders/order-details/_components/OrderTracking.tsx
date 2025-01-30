import { Package, ShoppingCart, Gift, Truck, User } from 'lucide-react';

interface OrderTrackingProps {
  trackingNumber: string;
  shippingMethod: string;
  status: string;
  expectedDate: string;
  currentStep: number;
}

const steps = [
  {
    title: 'Confirmed Order',
    icon: ShoppingCart,
  },
  {
    title: 'Processing Order',
    icon: Package,
  },
  {
    title: 'Product Dispatched',
    icon: Gift,
  },
  {
    title: 'On Delivery',
    icon: Truck,
  },
  {
    title: 'Product Delivered',
    icon: User,
  },
];

const OrderTracking = ({
  trackingNumber = '34VB5540K83',
  shippingMethod = 'UPS Ground',
  status = 'Checking Quality',
  expectedDate = 'DEC 09, 2021',
  currentStep = 3,
}: OrderTrackingProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 drop-shadow-lg">
      <div className="text-center">
        <h2 className="text-lg text-muted-foreground">TRACKING ORDER NO - {trackingNumber}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 bg-gray-50 py-3 px-6 rounded-lg">
        <div className="text-center md:text-left">
          <p className="text-sm text-gray-600">
            Shipped Via: <span className="font-semibold">{shippingMethod}</span>
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Status: <span className="font-semibold">{status}</span>
          </p>
        </div>
        <div className="text-center md:text-right">
          <p className="text-sm text-gray-600">
            Expected Date: <span className="font-semibold">{expectedDate}</span>
          </p>
        </div>
      </div>

      <div className="relative pt-4 pb-12 drop-shadow-lg">
        {/* Progress Line */}
        <div
          className="absolute top-10 left-0 right-0 h-[2px] bg-gray-200"
          style={{
            width: 'calc(100% - 96px)', // Adjust for icon width (48px on each side)
            left: '48px', // Center between icons
          }}
        >
          <div
            className="h-full bg-[#8BA4F9] transition-all duration-500 ease-in-out"
            style={{
              width: `${Math.min(100, ((currentStep - 1) / (steps.length - 1)) * 100)}%`,
            }}
          />
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-3 md:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index < currentStep;
            const isCurrent = index === currentStep - 1;

            return (
              <div key={index} className="flex flex-col items-center gap-3">
                <div
                  className={`
                w-12 h-12 rounded-full flex items-center justify-center z-10
                transition-colors duration-200
                ${isCompleted || isCurrent ? 'bg-[#8BA4F9] text-white' : 'bg-gray-100 text-gray-400'}
              `}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <p
                  className={`
                text-sm text-center
                ${isCompleted || isCurrent ? 'text-[#8BA4F9] font-medium' : 'text-gray-400'}
              `}
                >
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
