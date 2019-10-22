using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SW.SimplyRazor
{
    public class PageInfo : ISimplyPager
    {
        public PageInfo(int size)
        {
            Size = size;
        }

        public PageInfo(int index, int size, int count, int totalCount)
        {


            
            Index = index;
            Size = size;
            Count = count;
            TotalCount = totalCount;
        }

        public int Index { get; set; } 

        public int Size { get; set; } 

        public int Count { get; set; }

        public int TotalCount { get; set; }


        public bool ProbablyLast => Size == 0 || Count < Size;  


        public int TotalPages => Size <=0 ? 0 : (int)Math.Ceiling(decimal.Divide(TotalCount, Size));
    }
}
