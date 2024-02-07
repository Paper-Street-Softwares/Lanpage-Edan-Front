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
      <div className="my-8 text-xl font-semibold text-gray">
        {sectionTextAndImagesTitleFirst}
      </div>
      <div className="text-xl font-semibold text-gray">
        {sectionTextAndImagesTitleSecond}
      </div>
      <div className="text-sm text-gray">{sectionTextAndImagesDescription}</div>
      <div className="mt-2 text-sm font-semibold text-gray">
        {sectionTextAndImagesSubscription}
      </div>
      <div>
        {sectionTextAndImagesImg && (
          <div
            className={`flex flex-col ${
              props.applyBorder ? "border-b-8 border-primary" : ""
            }`}
          >
            <img src={sectionTextAndImagesImg} alt={imgDescription} />
          </div>
        )}
      </div>
      <div className="w-full h-full">
        {iframe && (
          <div className="border-b-8 border-primary">
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
