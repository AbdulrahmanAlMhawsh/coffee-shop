import Card from "../components/Card"

function Section_Exploring () {
  
    return (



      <div className="app-container bg-[#6d4c41] text-white font-sans text-center">
      {/* الخلفية بالفيديو */}
      <div className="relative bg-cover bg-center">
        {/* عنصر الفيديو */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://videos.pexels.com/video-files/4326938/4326938-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          {/* رسالة في حالة عدم دعم الفيديو */}
          Your browser does not support the video tag.
        </video>
    
        {/* النص والمحتوى فوق الفيديو */}
        <h1 className="text-white relative z-10">Exploring Our Unique Collections</h1>
        <div className="absolute inset-0 bg-[#6d4c41]/80 z-5"></div>
    
        <div className="min-h-screen flex items-center justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 min-h-screen text-center items-center justify-center relative z-10">
            <Card image=".\images\black-roast.png" title="Beautiful Sunset" />
            <Card image=".\images\bulk-packs.png" title="Bulk Packs" />
            <Card image=".\images\iced-coffees.png" title="Iced Coffees" />
            <Card image=".\images\velvet-roast.png" title="Blended" />
            <Card image=".\images\cold-brews.png" title="Cold Brews" />
            <Card image=".\images\instant-made.png" title="Instant Made" />
          </div>
        </div>
      </div>
    </div>
    
    );
  }
  
  export default Section_Exploring