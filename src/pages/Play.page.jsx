import React from "react";
import DefaultLayoutHoc from "../layout/Default.Layout";
import Poster from "../components/poster/Poster.Components";
import PlayFilter from "../components/PlayFilter/PlayFilter.component";

const PlayPage = () => {
  return (
    <>
      <div className="container mx-auto px-4 my-10">
        <div className="w-full flex flex-col-reverse lg:flex-row-reverse gap-4">
          <h2 className="text-2xl font-bold mb-4">Plays in SriLanka</h2>
          <div className="flex flex-wrap">
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src="https://lk-aps.bmscdn.com/Events/moviecard/karthik-live-in-colombo-et00004924-2023-5-10-t-13-20-57.jpg"
                title="Karthik Live in Colombo"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src="https://lk-aps.bmscdn.com/Events/moviecard/krish-live-in-colombo-et00004951-2023-5-30-t-15-34-28.jpg"
                title="Krish live in Colombo"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src="https://lk-aps.bmscdn.com/Events/moviecard/the-legend-hariharan-live-in-colombo-et00004944-2023-5-24-t-17-26-38.jpg"
                title="Hariharan Musical Show"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-suhani-shah-kahaani-india-tour-0-2022-8-29-t-12-36-14.jpg"
                title="So Rude of Me By Sweets"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>

            <div className="w-1/2 md:w-1/3 lg:w-3/12 my-3 flex itmes-center">
              <Poster
                isPlay={true}
                src="https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-daddy-kool-by-atul-khatri-0-2022-8-16-t-10-37-17.jpg"
                title="Shaka Boom"
                subtitle="Comedy Shows | English, Tamil | 2hr 30 mins"
              />
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 bg-white rounded">
          <h2 className="text-2xl font-bold mb-4">filters</h2>
          <div>
            <PlayFilter
              title="Date"
              tags={["Today", "Tomorrow", "This Weekend"]}
            />
          </div>
          <div>
            <PlayFilter
              title="Language"
              tags={["English", "Tamil", "Sinhala"]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DefaultLayoutHoc(PlayPage);
