function Karibu() {
  const d = new Date();
  let hour = d.getHours();
  let greeting;

  if (hour >= 0 && hour <= 12) {
    greeting = "Good Morning";
  } else if (hour > 12 && hour <= 16) {
    greeting = "Good Afternoon";
  } else if (hour > 16 && hour <= 23) {
    greeting = "Good Evening";
  }

  return (
    <div className=" karibu-card bg-gray-800 px-0 z-10">
      <div className="text-white h-[250px]">
        <h1 className="pt-4 pl-6">Karibu Admin</h1>
        <h2 className="font-bold text-2xl pl-6">{greeting}</h2>
      </div>
    </div>
  );
}

export default Karibu;
