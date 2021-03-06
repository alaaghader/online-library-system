﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace OnlineLibrarySystem.Models
{
    [DataContract]
    public class Person : CommonModel
    {
        [DataMember]
        public int PersonId { get; set; }
        [DataMember]
        public string Username { get; set; }
        [DataMember]
        public string UserPassword { get; set; }
        [DataMember]
        public bool Error { get; set; }
        [DataMember]
        public PersonType PersonType { get; set; }
        [DataMember]
        public string Email { get; set; }
        [DataMember]
        public string Phone { get; set; }
        [DataMember]
        public string ProfileImage { get; set; }
    }
}