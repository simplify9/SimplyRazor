﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public interface IBusyButton
    {
        Task SetBusy(bool busy);
        
    }
}