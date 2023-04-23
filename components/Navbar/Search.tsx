'use client';

export default function Search(){
    return(
        <div
            className="
                border-[1px]
                w=full
                md:w-auto
                py-2
                rounded-full
                shawdow-sm
                hover:shadow-md
                transition
                curseor-pointer
            
            "
        >
            <div
                className="
                    flex
                    flex-row
                    items-center
                    justify-between                    
                "
            >
                <div
                    className="
                        text-sm
                        font-semibold
                        px-6                    
                    "  

                >
                    Somewhere
                </div>

            </div>
                       
        </div>
        );
}