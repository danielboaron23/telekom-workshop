import{n as e}from"./rolldown-runtime-CsOFd3vK.js";import{o as t}from"./iframe-DGB3iEjt.js";import{n,r,t as i}from"./tokens-ZaoThqp-.js";var a,o,s,c;function l(){return(l=e((()=>{a=t(),r(),o={title:`Foundations/Colors`,parameters:{layout:`fullscreen`}},s={render:()=>(0,a.jsxs)(`div`,{className:`min-h-screen bg-page p-10`,children:[(0,a.jsx)(`h1`,{className:`mb-6 text-lg leading-6 font-bold text-ink`,children:`Colors`}),(0,a.jsx)(`div`,{className:`grid max-w-5xl grid-cols-3 gap-4`,children:Object.entries(i).map(([e,t])=>(0,a.jsxs)(`div`,{className:`flex items-center gap-4 rounded-card bg-paper p-4 shadow-card`,children:[(0,a.jsx)(`div`,{className:`size-14 shrink-0 rounded-lg border border-black/12`,style:{background:t.value}}),(0,a.jsxs)(`div`,{className:`min-w-0`,children:[(0,a.jsx)(`p`,{className:`text-sm leading-5 font-bold text-ink`,children:e}),(0,a.jsx)(`p`,{className:`truncate font-mono text-xs leading-4 text-secondary-text`,children:t.value}),(0,a.jsx)(`p`,{className:`text-xs leading-4 font-medium text-secondary-text`,children:t.usage})]})]},e))}),(0,a.jsx)(`h2`,{className:`mt-10 mb-4 text-lg leading-6 font-bold text-ink`,children:`Gradients`}),(0,a.jsx)(`div`,{className:`grid max-w-5xl grid-cols-3 gap-4`,children:Object.entries(n).map(([e,t])=>(0,a.jsxs)(`div`,{className:`flex items-center gap-4 rounded-card bg-paper p-4 shadow-card`,children:[(0,a.jsx)(`div`,{className:`size-14 shrink-0 rounded-lg`,style:{background:t}}),(0,a.jsxs)(`div`,{className:`min-w-0`,children:[(0,a.jsx)(`p`,{className:`text-sm leading-5 font-bold text-ink`,children:e}),(0,a.jsx)(`p`,{className:`truncate font-mono text-xs leading-4 text-secondary-text`,children:t})]})]},e))})]})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="min-h-screen bg-page p-10">
      <h1 className="mb-6 text-lg leading-6 font-bold text-ink">Colors</h1>
      <div className="grid max-w-5xl grid-cols-3 gap-4">
        {Object.entries(colors).map(([name, token]) => <div key={name} className="flex items-center gap-4 rounded-card bg-paper p-4 shadow-card">
            <div className="size-14 shrink-0 rounded-lg border border-black/12" style={{
          background: token.value
        }} />
            <div className="min-w-0">
              <p className="text-sm leading-5 font-bold text-ink">{name}</p>
              <p className="truncate font-mono text-xs leading-4 text-secondary-text">{token.value}</p>
              <p className="text-xs leading-4 font-medium text-secondary-text">{token.usage}</p>
            </div>
          </div>)}
      </div>
      <h2 className="mt-10 mb-4 text-lg leading-6 font-bold text-ink">Gradients</h2>
      <div className="grid max-w-5xl grid-cols-3 gap-4">
        {Object.entries(gradients).map(([name, value]) => <div key={name} className="flex items-center gap-4 rounded-card bg-paper p-4 shadow-card">
            <div className="size-14 shrink-0 rounded-lg" style={{
          background: value
        }} />
            <div className="min-w-0">
              <p className="text-sm leading-5 font-bold text-ink">{name}</p>
              <p className="truncate font-mono text-xs leading-4 text-secondary-text">{value}</p>
            </div>
          </div>)}
      </div>
    </div>
}`,...s.parameters?.docs?.source}}},c=[`Palette`]})))()}l();export{s as Palette,c as __namedExportsOrder,o as default};