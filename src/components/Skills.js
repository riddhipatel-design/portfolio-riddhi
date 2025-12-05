export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-2xl font-semibold mb-8">Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2">Front-End</h3>
          <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <li>HTML, CSS (Sass), JavaScript</li>
            <li>React.js</li>
            <li>Tailwind, Bootstrap</li>
            <li>jQuery, JSON</li>
            <li>Responsive Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Tools</h3>
          <ul className="text-gray-700 dark:text-gray-300 text-sm space-y-1">
            <li>VS Code</li>
            <li>Git, GitHub, Netlify</li>
            <li>Photoshop, Illustrator, InDesign</li>
            <li>WordPress</li>
            <li>Node.js (npm workflows)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
