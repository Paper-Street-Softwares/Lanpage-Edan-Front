export default function SectionTextAndImages(props) {
  const {
    sectionTextAndImagesTitleFirst,
    sectionTextAndImagesTitleSecond,
    sectionTextAndImagesDescription,
    sectionTextAndImagesSubscription,
    sectionTextAndImagesImg,
    imgDescription,
    iframe,
  } = props;

  return (
    <div className="w-full h-auto font-poppins">
      <div className="font-semibold text-xl text-gray my-8">
        {sectionTextAndImagesTitleFirst}
      </div>
      <div className="font-semibold text-xl text-gray">
        {sectionTextAndImagesTitleSecond}
      </div>
      <div className="text-sm text-gray">{sectionTextAndImagesDescription}</div>
      <div className="text-sm font-semibold text-gray mt-2">
        {sectionTextAndImagesSubscription}
      </div>
      <div>
        {sectionTextAndImagesImg && (
          <div
            className={`flex flex-col ${
              props.applyBorder ? "border-b-8 border-lightgreen" : ""
            }`}
          >
            <img src={sectionTextAndImagesImg} alt={imgDescription} />
          </div>
        )}
      </div>
      <div className="w-full h-full">
        {iframe && (
          <div className="border-b-8 border-lightgreen">
            <iframe
              title="Localização EDAN Contabilidade"
              src={iframe}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
