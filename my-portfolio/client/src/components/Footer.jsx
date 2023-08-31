import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="p-5 sm:p-10 bg-gray-600">
      <div className="w-3/4 sm:w-1/2 mx-auto mb-5">
        <p className="text-white text-center font-bold p-2 border-b-2 border-teal-500">
          {t("Spotify.1")}
        </p>
      </div>
      <div className="rounded-xl w-50 sm:w-96 mx-auto">
        <iframe
          src="https://open.spotify.com/embed/playlist/2tS5ZTShqRjeKhfzclj27E?utm_source=generator&theme=0"
          width="100%"
          height="152"
          allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
