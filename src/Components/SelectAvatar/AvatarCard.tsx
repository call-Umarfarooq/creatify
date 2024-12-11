import React from 'react'

const AvatarCard = () => {
  return (
    <div
    className="relative h-full cursor-pointer w-full p-0.5"
    style={{
      contentVisibility: "auto",
      containIntrinsicSize: "auto 286px auto 200px",
    }}
  >
    <div className="relative aspect-1/1 size-full overflow-hidden rounded-2xl border-[1.5px] border-transparent border-solid">
      <img
        alt="poster-speed"
        loading="lazy"
        width="286"
        height="200"
        decoding="async"
        data-nimg="1"
        className="-z-10 absolute opacity-0"
        srcSet="/_next/image?url=https%3A%2F%2Fdpbavq092lwjh.cloudfront.net%2Fcreators%2F74686a1c-040c-4783-a2e2-a54367fbf998%2Fsquared_preview_image_thumbnail_Thumbnail-2.png&amp;w=384&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fdpbavq092lwjh.cloudfront.net%2Fcreators%2F74686a1c-040c-4783-a2e2-a54367fbf998%2Fsquared_preview_image_thumbnail_Thumbnail-2.png&amp;w=640&amp;q=75 2x"
        src="/_next/image?url=https%3A%2F%2Fdpbavq092lwjh.cloudfront.net%2Fcreators%2F74686a1c-040c-4783-a2e2-a54367fbf998%2Fsquared_preview_image_thumbnail_Thumbnail-2.png&amp;w=640&amp;q=75"
        style={{ color: "transparent" }}
      />
      <video
        className="size-full rounded-2xl object-cover object-center"
        src="https://dpbavq092lwjh.cloudfront.net/creators/74686a1c-040c-4783-a2e2-a54367fbf998/squared_preview_video_sp.mp4"
        loop
        preload="none"
        style={{
          background: "url('/placeholder/image-bg-black-landscape.png') center center / cover no-repeat",
        }}
        poster="https://app.creatify.ai/_next/image?url=https%3A%2F%2Fdpbavq092lwjh.cloudfront.net%2Fcreators%2F74686a1c-040c-4783-a2e2-a54367fbf998%2Fsquared_preview_image_thumbnail_Thumbnail-2.png&amp;w=640&amp;q=75"
      ></video>
      <div className="rounded-2xl absolute right-0 bottom-0 left-0 z-20 mx-auto h-[68px] translate-y-5 flex-col justify-end p-2 pt-5 transition-transform bg-gradient-to-t from-[#000]/80 to-[#000]/0">
        <div className="flex items-center"></div>
        <div className="text-color-body opacity-0">Olivia</div>
      </div>
    
    </div>
  </div>
  )
}

export default AvatarCard