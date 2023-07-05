import { useEffect, useRef, useState } from "react";
import mermaid from "mermaid";
import { observer } from "mobx-react-lite";

type IProps={
    code:string;
}
const Mermaid: React.FC<IProps>=observer(({code})=>{
    const ref = useRef<HTMLDivElement>(null);
    const [hasError, setHasError] = useState(false);
  
    useEffect(() => {
      if (code && ref.current) {
        mermaid
          .run({
            nodes: [ref.current],
            suppressErrors: true,
          })
          .catch((e) => {
            setHasError(true);
            console.error("[Mermaid] ", e.message);
          });
      }
    }, [code]);
  
    function viewSvgInNewWindow() {
      const svg = ref.current?.querySelector("svg");
      if (!svg) return;
      const text = new XMLSerializer().serializeToString(svg);
      const blob = new Blob([text], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      const win = window.open(url);
      if (win) {
        win.onload = () => URL.revokeObjectURL(url);
      }
    }
  
    if (hasError) {
      return null;
    }
  
    return (
      <div
        className="no-dark mermaid"
        style={{
          cursor: "pointer",
          overflow: "auto",
        }}
        ref={ref}
        onClick={() => viewSvgInNewWindow()}
      >
        {code}
      </div>
    );
  })
export default Mermaid