﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace OnlineLibrarySystem.Models
{
    [DataContract]
    public class CommonModel
    {
        public string Token { get; set; }
        public PersonType TokenPersonType { get; set; }
    }
}