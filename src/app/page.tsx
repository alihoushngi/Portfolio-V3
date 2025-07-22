import Info from "@/components/ui/Info/info";
import Social from "@/components/ui/Social/Social";

export default function Home() {
  return (
    <div className="flex justify-start items-start px-16 py-12 min-h-screen gap-6">
      <Info />
      <Social />
      <div className="w-2/4"></div>
    </div>
  );
}
