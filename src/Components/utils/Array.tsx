import { BadIcn, DownlodIcn, EditIcn, GoodIcn, RemoveWaterM, ShareIcn } from "./SvgIcons";

export const buttons = [
    {
      id: "remove-watermark",
      icon: <RemoveWaterM />,
      label: "Remove watermark",
    },
    { id: "download", icon: <DownlodIcn />, label: "Download" },
    { id: "edit", icon: <EditIcn />, label: "Edit" },
    { id: "share", icon: <ShareIcn />, label: "Share" },
  ];

 export const button = [
    {
      id: "good",
      icon: <GoodIcn />,
      label: "Good",
      styles: "hover:opacity-100 opacity-50",
    },
    {
      id: "bad",
      icon: <BadIcn />,
      label: "Bad",
      styles: "opacity-50 hover:opacity-100",
    },
  ];