import { useState, useRef } from 'react';

export default function HtmlEditorFullscreen() {
  const [docHtml, setDocHtml] = useState(null);
  const [filename, setFilename] = useState('edited.html');
  const iframeRef = useRef(null);
  console.log('hello');

  const makeEditable = () => {
    const idoc = iframeRef.current?.contentDocument;
    if (!idoc) return;
    idoc.designMode = 'on';
    if (idoc.body) idoc.body.contentEditable = 'true';
  };

  const handlePick = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    setFilename(f.name.replace(/\\.html?$/i, '') + '-edited.html');
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      setDocHtml(reader.result); // this triggers the switch from input to iframe
    };
    reader.readAsText(f);
  };

  if (docHtml == null) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-50">
        <div className="space-y-3 text-center">
          <h1 className="text-xl font-semibold">choose an html file</h1>
          <input type="file" accept=".html,text/html" onChange={handlePick} />
        </div>
      </div>
    );
  }

  return (
    <iframe
      ref={iframeRef}
      title="editor"
      srcDoc={docHtml}
      className="w-screen h-screen block"
      onLoad={() => {
        const idoc = iframeRef.current.contentDocument;
        if (!idoc) return;
        idoc.designMode = 'on';
        if (idoc.body) {
          idoc.body.contentEditable = 'true';
          // make body scrollable and respect layout
          const style = idoc.createElement('style');
          style.innerHTML = `
        html, body {
          margin:0; 
          padding:0; 
          height:100%; 
          overflow:auto; 
        }
      `;
          idoc.head.appendChild(style);
        }
      }}
    />
  );
}
