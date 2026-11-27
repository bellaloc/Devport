import { personal_data } from "@/data/home";
import SocialLinks from "../global/SocialLinks";

const Footer = () => {
  return (
    <div className="mt-16 ">
      <hr className="border-[var(--border)]" />
      <footer className="mt-8 text-center flex flex-col items-center gap-2">
        <p>
          © {new Date().getFullYear()}{" "}
          <span
            className="text-[var(--main)] font-semibold uppercase hover:underline"
            onClick={() =>
              window.scrollTo({ left: 0, top: 0, behavior: "instant" })
            }
          >
            {personal_data.name}
          </span>{" "}
          Personal content. Third-party components retain their respective licenses.
        </p>

        <SocialLinks className="w-fit justify-center" />
      </footer>
    </div>
  );
};

export default Footer;
