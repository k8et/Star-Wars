function StarWarsSvg(props) {
  const { width, height, color, onClick } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className={"logoSvg"}
      onClick={onClick}
      viewBox="-70.8 -51.001 613.6 306.007"
    >
      <path
        fill={color}
        d="M201.516 163.01h-14.388c-.507 0-.871-.572-.871-1.118 0-.194 7.656-24.877 7.656-24.877.273-.923.299-.95.403-.95h.013c.116 0 .13.027.402.95 0 0 7.656 24.683 7.656 24.877 0 .546-.39 1.118-.87 1.118m19.405-56.475a1.253 1.253 0 00-1.105-.897h-52.836a1.262 1.262 0 00-1.105.884s-29.206 96.417-29.206 96.6c0 .48.377.87.871.87h34.925a.917.917 0 00.546-.663l4.068-12.997a.878.878 0 01.793-.56l32.222-.025c.35.026.663.273.793.585l4.159 12.997c.065.3.273.572.546.676l34.366-.013c.48 0 .884-.364.884-.845 0-.169-29.921-96.612-29.921-96.612m99.563 39.366l-21.46.013s-.571-.169-.571-.819l-.013-10.827c0-.65.572-.819.572-.819h19.678c2.288 0 6.915 1.144 6.915 6.434s-5.121 6.018-5.121 6.018m102.89-8.383H472v-31.884h-62.52c-5.848 0-14.076 3.016-18.794 6.512-4.718 3.496-11.542 11.464-11.542 22.447 0 10.983 6.668 19.523 6.668 19.523 3.418 4.237 12.023 13.063 12.023 13.063.195.208.312.48.312.793 0 .662-.533 1.195-1.196 1.195h-48.157c-5.862-.026-6.265-2.352-6.265-2.69 0-.598.728-.975.728-.975 2.197-1.053 6.68-4.55 6.68-4.55 9.515-7.408 10.66-17.572 10.66-23.018 0-5.46-.82-15.117-10.581-23.578-9.761-8.462-22.122-8.696-22.122-8.696h-68.72v97.77c0 .311.286.558.598.558h38.253v-27.425c0-.48.74 0 .74 0l19.926 20.017c7.084 7.161 18.795 7.408 18.795 7.408l75.335-.013c12.855 0 20.004-6.992 21.966-8.942 1.95-1.963 8.462-9.28 8.462-21.407 0-12.114-5.537-18.314-7.903-21.16-2.105-2.548-10.502-11.439-12.257-13.285a.92.92 0 01-.338-.714c0-.43.247-.832.624-.95m-304.163 66.469c.26 0 .442-.182.52-.468 0 0 29.596-97.21 29.596-97.302 0-.26-.156-.545-.403-.571H112.44c-.182 0-.299.143-.338.338 0 .013-7.552 25.28-7.552 25.293-.052.208-.156.338-.338.338-.182 0-.338-.182-.364-.338l-7.902-25.306c-.026-.17-.156-.325-.338-.325l-40.293-.013a.39.39 0 00-.26.234l-7.084 25.397c-.039.221-.156.351-.351.351a.348.348 0 01-.338-.299l-7.513-25.371a.358.358 0 00-.299-.312H.581a.58.58 0 00-.572.584c0 .052.013.156.013.156l30.038 97.146c.078.286.26.468.52.468l32.3.013c.194-.026.39-.247.441-.481.013 0 11.243-36.147 11.243-36.147.065-.221.156-.35.338-.35.195 0 .3.155.351.337l10.957 36.316a.465.465 0 00.442.312h32.56M91.114.004c-5.862 0-14.076 3.015-18.794 6.512-4.72 3.496-11.542 11.464-11.542 22.447 0 10.983 6.667 19.523 6.667 19.523 3.419 4.237 12.023 13.127 12.023 13.127.195.208.312.481.312.78 0 .663-.533 1.209-1.195 1.209H0v34.756h94.455c12.842 0 20.003-6.993 21.966-8.955 1.95-1.95 8.449-9.268 8.449-21.395 0-12.114-5.524-18.379-7.89-21.225-2.106-2.548-10.502-11.386-12.257-13.219a.967.967 0 01-.338-.728c0-.429.247-.819.624-.949h45.492v66.471h34.977V32.056h42.464V.004zm305.067 40.268l-21.459.013s-.572-.169-.572-.819l-.013-10.827c0-.65.572-.819.572-.819h19.679c2.287 0 6.914 1.144 6.914 6.434s-5.12 6.018-5.12 6.018m28.309 23.266c-5.85-.026-6.265-2.352-6.265-2.69 0-.598.727-.975.727-.975 2.197-1.053 6.681-4.55 6.681-4.55 9.515-7.408 10.659-17.572 10.659-23.018 0-5.46-.82-15.117-10.58-23.578C415.951.265 403.59.005 403.59.005h-68.72V97.8c0 .312.287.56.599.56h38.252V70.946c0-.494.741 0 .741 0l19.926 20.004c7.083 7.161 18.794 7.408 18.794 7.408h58.815V63.54h-47.506zm-145.414-6.166h-14.389c-.533 0-.87-.572-.87-1.118 0-.208 7.655-24.877 7.655-24.877.273-.923.35-.95.403-.95h.013c.052 0 .13.027.403.95 0 0 7.655 24.67 7.655 24.877 0 .546-.35 1.118-.87 1.118M298.443.871A1.198 1.198 0 00297.338 0h-52.835c-.52.026-.962.377-1.105.858 0 0-29.18 96.443-29.18 96.625 0 .481.39.871.87.871h34.926c.286-.09.493-.364.558-.663l4.069-13.01a.886.886 0 01.793-.546h32.208a.956.956 0 01.806.559l4.16 12.997c.064.3.272.572.545.676l34.366-.013a.852.852 0 00.871-.858c0-.156-29.947-96.625-29.947-96.625"
      ></path>
    </svg>
  );
}

export default StarWarsSvg;
