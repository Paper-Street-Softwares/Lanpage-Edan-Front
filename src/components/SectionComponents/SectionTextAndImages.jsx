export default function SectionTextAndImages(props) {
  const sectionTextAndImagesTitleFirst = props.sectionTextAndImagesTitleFirst;
  const sectionTextAndImagesTitleSecond = props.sectionTextAndImagesTitleSecond;
  const sectionTextAndImagesDescription = props.sectionTextAndImagesDescription;
  const sectionTextAndImagesSubscription =
    props.sectionTextAndImagesSubscription;
  const sectionTextAndImagesImg = props.sectionTextAndImagesImg;
  const imgDescription = props.imgDescription;
  const iframe = props.iframe;

  return (
    <div className="w-1/2">
      <div className="flex flex-col font-poppins font-semibold text-xl text-gray my-4">
        {sectionTextAndImagesTitleFirst}
      </div>
      <div className="flex flex-col font-poppins font-semibold text-xl text-gray">
        {sectionTextAndImagesTitleSecond}
      </div>
      <div className="flex flex-col font-poppins text-sm text-gray">
        {sectionTextAndImagesDescription}
      </div>
      <div className="flex flex-col font-poppins text-sm font-semibold text-gray">
        {sectionTextAndImagesSubscription}
      </div>
      <div className="flex flex-col">
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
      <div className="flex flex-col">
        {iframe && (
          <div className="border-b-8 border-lightgreen">
            <iframe
              title="Localização EDAN Contabilidade"
              src={iframe}
              width="auto"
              height="auto"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
}
