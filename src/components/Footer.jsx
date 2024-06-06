const Footer = () => {
  return (
    <footer id="footer" className="py-4 text-neutral-300 font-mono">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xs tracking-tight font-semibold flex flex-wrap text-center lg:flex-col">
          <p>Designed & Developed by Sahand Namvar</p>
        </div>

        <div className="text-xs tracking-tight font-semibold flex flex-wrap text-center lg:flex-col">
          <p className="mr-2">&copy; All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
