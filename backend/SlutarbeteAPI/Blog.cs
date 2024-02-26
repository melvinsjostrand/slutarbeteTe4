﻿namespace MissansZooOchWebbShopApi
{
    public class Blog
    {
        public int Id { get; set; }
        public string title { get; set; } = string.Empty;
        public string Img { get; set; } = string.Empty;
        public string text { get; set; } = string.Empty;    
        public string time { get; set; } = string.Empty;
        public string username { get; set; } = string.Empty;
        public List<Comment> comments { get; set; } = new List<Comment>();
        public void AddComment(Comment comment)
        {
            comments.Add(comment);
        }
    }
}
