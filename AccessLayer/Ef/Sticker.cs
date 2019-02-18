using System;
using System.Collections.Generic;

namespace AccessLayer.Ef
{
    public partial class Sticker
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int X { get; set; }
        public int Y { get; set; }
        public string Title { get; set; }
        public string Note { get; set; }
        public string Color { get; set; }
        public int Index { get; set; }
    }
}
