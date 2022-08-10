import EventImage from '../images/event.png';

const Event = () => {
  return (
    <div className="bg-[#f8f1ea]">
      <div className="py-4 w-[85%] m-auto flex items-center justify-between">
        <div className="font-medium text-lg leading-tight">
          <h1 className="text-blue-600">Free 1-day event:</h1>
          <p>Expert creators are sharing their secrets</p>
        </div>
        <div>
          <img
            src={EventImage}
            className="w-[150px] h-full object-cover"
            alt="Event"
          />
        </div>
        <button className="bg-white text-gray-600 hover:bg-black hover:text-white transition duration-200 py-1 px-6 text-md border-black border-2 rounded-[30px]">
          Join thousands of creators at the event
        </button>
      </div>
    </div>
  );
};

export default Event;
