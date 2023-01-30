export default function Card(props) {
  const { icon, title } = props;

  return (
    <div className="flex flex-col items-center p-6 border rounded-xl ml-3 mb-3 border-blue-300 h-25 w-96 md:w-80 md:h-22 md:text-center md:pt-2 md:pb-5">
      {icon}
      <p className="text-xl font-semibold">{title}</p>
    </div>
  );
}
