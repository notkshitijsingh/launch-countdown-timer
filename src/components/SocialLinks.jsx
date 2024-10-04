export default function SocialLinks() {
  const socials = ["facebook", "pinterest", "instagram"];

  return (
    <section className="flex items-center justify-center gap-9">
      {socials.map((social) => (
        <img
          key={social}
          className="cursor-pointer"
          src={`./src/assets/images/icon-${social}.svg`}
          alt={social}
        />
      ))}
    </section>
  );
}
