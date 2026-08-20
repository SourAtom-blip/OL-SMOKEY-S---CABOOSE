export default function Footer() {
  return (
    <footer className="w-full py-section-gap px-gutter flex flex-col md:flex-row justify-between items-start gap-item-gap bg-primary dark:bg-surface-container-highest text-on-primary dark:text-on-surface">
      <div className="flex flex-col gap-4 max-w-xs">
        <div className="font-headline-sm text-headline-sm text-primary-fixed flex items-center gap-2">
          <span className="material-symbols-outlined">train</span>
          Ol' Smokey's
        </div>
        <p className="font-body-md text-body-md text-primary-fixed-dim">
          © 2024 Ol' Smokey's - Caboose. Yokuts Valley, CA
        </p>
      </div>
      <div className="flex flex-col gap-2 font-body-md text-body-md text-primary-fixed-dim">
        <span className="font-label-bold text-label-bold text-on-primary mb-2 uppercase">Visit Us</span>
        <span className="cursor-default">Hours: Open until 8 PM</span>
        <a className="hover:text-secondary-container transition-colors focus:outline-none focus:underline" href="tel:+15593477314">
          +1 559-347-7314
        </a>
      </div>
      <div className="flex flex-col gap-2 font-body-md text-body-md text-primary-fixed-dim">
        <span className="font-label-bold text-label-bold text-on-primary mb-2 uppercase">Follow the Smoke</span>
        <a className="hover:text-secondary-container transition-colors focus:outline-none focus:underline" href="#">
          Facebook
        </a>
        <a className="hover:text-secondary-container transition-colors focus:outline-none focus:underline" href="#">
          Instagram
        </a>
      </div>
    </footer>
  );
}
