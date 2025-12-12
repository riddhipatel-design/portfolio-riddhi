
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export default function Contact() {
  return (
    <section id="contact" className="pt-14 pb-20">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Feel free to reach out for collaboration or opportunities!
      </p>

      <p className="text-lg flex items-center gap-2">
        <EmailOutlinedIcon fontSize="small" />
        riddhipatel2525@gmail.com
      </p>
    </section>
  );
}
