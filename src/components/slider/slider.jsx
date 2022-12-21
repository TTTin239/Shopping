export default function Slider() {
return (
    <div className="relative overflow-hidden bg-white">
    <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
        <div className="sm:max-w-lg">
            <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Summer styles are finally here
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
            if you live or die.
            </p>
        </div>
        <div>
            <div className="mt-10">
            {/* Decorative image grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                        src="https://giaygiare.vn/upload/images/outfit-cuc-chuan-sang-trong-voi-gucci-ace-2.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="https://i0.wp.com/bowsandsequins.com/wp-content/uploads/2018/11/thanksgiving-outfit-gucci-belt.jpg?ssl=1"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="https://assets.vogue.com/photos/5d88dba2f4118200084bf298/master/w_2560%2Cc_limit/_GUC0080.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM6l65YJ563tFeDygOpOU9ftCmtmap7DX44g&usqp=CAU"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="http://cdn.cnn.com/cnnnext/dam/assets/211103203333-01-macaulay-culkin-gucci-model-jared-leto-card.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="https://cdn.cliqueinc.com/posts/258375/gucci-logo-tshirt-outfits-258375-1527086536660-main.700x0c.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                        src="https://i.pinimg.com/236x/47/e9/e6/47e9e687783ab4a83a5dfbc4a094384b--gucci-belt.jpg"
                        alt=""
                        className="h-full w-full object-cover object-center"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>

            <a
                href="#"
                className="inline-block rounded-md border border-transparent py-3 px-8 text-center font-medium text-white"
                style={{ background: 'var(--clr-primary-5)', hoverColor: 'red'}}
            >
                SHOP NOW
            </a>
            </div>
        </div>
        </div>
    </div>
    </div>
)
};