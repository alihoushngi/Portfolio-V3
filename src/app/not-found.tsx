import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Image from "next/image";

const notFoundCodeDesktop = `const page = findPage('you-were-looking-for');

if (!page) {
  console.log("Oops! Looks like you took a wrong turn in the codebase.");
  console.log("But hey, since you're here...");
  console.log("🔍 Go back to the homepage and explore more cool stuff!");
  throw new Error("404: PageNotFoundError 😢");
}


/* Suggestions:
 * - Check the URL for typos
 * - Use the site navigation
 * - Or hit CMD+Z in real life 😅
 */

redirect('home');`;

const notFoundCodeMobile = `throw new Error(
"404: PageNotFoundError 😢"
);

goBack() || goHome();`;

const NotFound = () => {
  return (
    <div className="flex w-full max-md:flex-col justify-center items-center gap-32 h-full max-md:p-5 max-md:gap-5 max-md:h-[75vh] max-md:overflow-auto">
      <Image
        src={"/Images/404/404.svg"}
        alt="404"
        width={1080}
        height={1080}
        className="w-80 max-md:w-full"
      />
      <div className="max-md:hidden">
        <CodeBlock code={notFoundCodeDesktop} language="typescript" />
      </div>
      <div className="md:hidden">
        <CodeBlock code={notFoundCodeMobile} language="typescript" />
      </div>
    </div>
  );
};

export default NotFound;
