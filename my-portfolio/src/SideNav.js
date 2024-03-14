import pgImage from './images/pg.png';

const SideNav = () => {
    return ( 
        <div className="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-60 md:w-80">
            <a href="#" className="block w-full h-full">
                <img
                    alt="blog photo"
                    src={pgImage}
                    className="object-cover w-full max-h-40"
                />
                <div className="w-full p-4 bg-white dark:bg-gray-800">
                    <p className="font-medium text-indigo-500 text-md">Article</p>
                    <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">
                        Supercharged !
                    </p>
                    <p className="font-light text-gray-400 dark:text-gray-300 text-md">
                        The new supercar is here, 543 cv and 140 000$. This is best racing GT
                        about 7 years on...
                    </p>
                    <div className="flex flex-wrap items-center mt-4 justify-starts">
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Car
                        </div>
                        <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                            #Money
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}

const SideNavGroup = () => {
    return (
        <div className="grid grid-cols-3 gap-4">
            <div>
                <SideNav />
            </div>
            <div>
                <SideNav />
            </div>
            <div>
                <SideNav />
            </div>
            <div>
                <SideNav />
            </div>
            <div>
                <SideNav />
            </div>
            <div>
                <SideNav />
            </div>
        </div>
    );
}

export default SideNavGroup;
