﻿using System;
using System.Collections.Generic;
using System.Text;

namespace SW.SimplyRazor
{
    public class UserMessage : INotification
    {
        public AttentionLevel Level { get; set; }
        public string Body { get; set; }

        public string Title { get; set; }
    }
}
