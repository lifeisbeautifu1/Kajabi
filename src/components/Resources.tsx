import Resource from './Resource';

const Resources = () => {
  return (
    <div className="bg-[#0072ef] text-white">
      <div className="w-[85%] m-auto py-20">
        <h1 className="text-6xl font-semibold">
          Resources to help you earn more
        </h1>
        <div className="flex flex-wrap py-8 gap-10">
          <Resource
            title="Kajabi Blog"
            paragraph="Stay informed on the latest trends in today’s creator economy."
          />
          <Resource
            title="Kajabi Edge Podcast"
            paragraph="Stay informed on the latest trends in today’s creator economy."
          />
          <Resource
            title="Kajabi University"
            paragraph="Get on-demand training to take you from zero to launch and beyond."
          />
          <Resource
            title="Created on Kajabi"
            paragraph="See real examples of what Kajabi customers have created."
          />
          <Resource
            title="Guides"
            paragraph="Get started with simple step by step guides."
          />
          <Resource
            title="Kajabi Hero Community"
            paragraph="Network, get advice, and celebrate wins with your fellow entrepreneurs."
          />
        </div>
      </div>
    </div>
  );
};

export default Resources;
