import PropTypes from "prop-types";
import prv from "../assets/icons/back.png";
import nxt from "../assets/icons/next.png";
const ProfileSelector = ({ profiles, perfil, setPerfil, images }) => {
  const nextProfile = () => {
    const currentIndex = profiles.indexOf(perfil);
    const nextIndex = (currentIndex + 1) % profiles.length;
    setPerfil(profiles[nextIndex]);
  };

  const prevProfile = () => {
    const currentIndex = profiles.indexOf(perfil);
    const prevIndex = (currentIndex - 1 + profiles.length) % profiles.length;
    setPerfil(profiles[prevIndex]);
  };

  return (
    <div className="w-auto flex justify-center text-center">
      <div className="w-1/2 mt-2 mx-auto">
        <label
          htmlFor="input"
          className="block text-gray-700 uppercase font-bold"
        >
          Perfil
        </label>
        <div className="w-full flex justify-center items-center">
          <img
            src={prv}
            alt=""
            className="border-2 p-2 placeholder-gray-400 rounded-md cursor-pointer"
            onClick={prevProfile}
          />
          <img className="mx-2" src={images[perfil]} alt={perfil} />
          <img
            src={nxt}
            alt=""
            className="border-2 p-2 placeholder-gray-400 rounded-md cursor-pointer"
            onClick={nextProfile}
          />
        </div>
      </div>
    </div>
  );
};

ProfileSelector.propTypes = {
  profiles: PropTypes.array.isRequired,
  perfil: PropTypes.string.isRequired,
  setPerfil: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

export default ProfileSelector;
