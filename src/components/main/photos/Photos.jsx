import React from 'react';

export default function Photos({ title, photos }) {
  return (
    <div className="mt-5">
      <h1 className="text-center font-normal text-[30px]">{title}</h1>
      <div className="mt-5 flex justify-between items-center flex-wrap gap-2">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="my-5 relative border-2 w-[200px] h-[350px]"
          >
            <img src={photo.url} alt={photo.id} className="w-[200px]" />
            <p className="mt-2 text-center w-[190px] text-gray-800 text-[16px] font-light">
              {photo.title}
            </p>
            <a
              href={photo.url}
              target="_blank"
              className=" p-2 border-2 absolute bottom-0 duration-200 text-white bg-black hover:text-black hover:bg-slate-400"
            >
              Link to image
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
