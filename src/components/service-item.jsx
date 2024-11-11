// eslint-disable-next-line react/prop-types
const ServiceItem = ({ title, description, icon: Icon }) => {
  return (
    <div className='flex items-center space-x-4'>
      <div className='rounded-full bg-slate-50 h-10 w-10 flex items-center justify-center drop-shadow '>
        <Icon className="size-6 text-rose-500"  />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-semibold">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceItem;
