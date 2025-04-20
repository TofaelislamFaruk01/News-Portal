import Header from "../Components/Header";


const About = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content px-6 py-12">
        {/* <header>
            <Header/>
        </header> */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">About The Bulletin Wire</h1>
        <p className="text-lg leading-relaxed mb-8">
          <strong>The Bulletin Wire</strong> is a modern, dynamic, and user-friendly news portal committed to bringing you the latest headlines, in-depth stories, and trending topics from around the world. Our goal is to create a space where news meets clarity, accuracy, and accessibility.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-base-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-secondary mb-2">🌐 Our Mission</h2>
            <p>
              We aim to provide fast, reliable, and unbiased news. Whether it's politics, tech, entertainment, or sports, we ensure that our readers are always informed with facts and context.
            </p>
          </div>
          <div className="p-6 bg-base-200 rounded-lg shadow">
            <h2 className="text-2xl font-semibold text-secondary mb-2">⚙️ Built With</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>React JS</li>
              <li>Tailwind CSS & DaisyUI</li>
              <li>Firebase Auth & Hosting</li>
              <li>Modern JavaScript (ES6+)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-2 text-accent">💡 Why The Bulletin Wire?</h2>
          <p className="leading-relaxed">
            This project is part of my learning journey in web development. I created it to practice real-world coding skills, user authentication, API integration, and responsive design—all while building something meaningful.
          </p>
        </div>

        <div className="mt-12 text-sm text-gray-500">
          Made with 💻 by <strong>Tofael Islam Faruk</strong>
        </div>
      </div>
    </div>
  );
};

export default About;
