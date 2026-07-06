function NameText() {
  return (
    <div className="w-full cursor-default [-webkit-touch-callout:none]" data-state="closed" data-slot="context-menu-trigger">
        <div className="relative w-full text-(--primary)">
            <svg className="w-full select-none"viewBox="0 0 3300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" stroke="currentColor" strokeOpacity="0.1" strokeWidth="2" fill="url(#fluid_gradient_text_linear)" className="font-sans text-[300px] font-bold text-white">
                    "NAH.. I'D WIN!"
                    <img className="w-10 h-10 " src="/gojo-finger.png"/>
                </text>
                <defs>
                    <linearGradient id="fluid_gradient_text_linear" y1="0" x2="1650" y2="300" gradientUnits="userSpaceOnUse" x1="1650">
                        <stop offset="0" stopColor="currentColor" stopOpacity="0.22" />
                        <stop offset="1" stopColor="currentColor" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    </div>
  );
}

export default NameText;