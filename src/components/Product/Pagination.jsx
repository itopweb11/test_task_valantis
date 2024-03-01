import React from "react";

const Pagination = ({pagination, toPrevPage, toNextPage}) => {
    const isDisabled = (isDisabled)=>{
        if (isDisabled){
            return "border-[#57534e] text-[#57534e] opacity-50"
        }else{
            return "hover:bg-[#12123fe6] border-[#12123fe6] text-[#12123fe6] hover:text-white"
        }
    }

    return (
        <div className="flex gap-[25px] justify-center">
            <button
                onClick={toPrevPage}
                disabled={!pagination.toPrev}
                className={isDisabled(!pagination.toPrev)+" px-[20px] py-[10px] max-lg:px-[10px] max-lg:py-0 text-[21px] font-semibold rounded-[10px] border-[2px]"}>
                {'<'}
            </button>
            <button
                onClick={toNextPage}
                disabled={!pagination.toNext}
                className={isDisabled(!pagination.toNext)+" px-[20px] py-[10px] max-lg:px-[10px] max-lg:py-0 text-[21px] font-semibold rounded-[10px] border-[2px]"}>
                {'>'}
            </button>
        </div>
    )
};

export default Pagination;
