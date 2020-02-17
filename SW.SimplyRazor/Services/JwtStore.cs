using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public class JwtStore
    {
        private readonly AuthenticationStateProvider authenticationStateProvider;
        private readonly ComponentOptions componentOptions;
        private string jwt;
        //private bool jwtNotPresent;

        public JwtStore(AuthenticationStateProvider authenticationStateProvider, ComponentOptions componentOptions)
        {
            this.authenticationStateProvider = authenticationStateProvider;
            this.componentOptions = componentOptions;
        }

        async public Task<string> GetJwt()
        {
            if (jwt != null) return jwt;

            jwt = await PrepJwt();

            return jwt;
        }

        async Task<string> PrepJwt()
        {
            if (componentOptions.ApiTokenKey == null) return null;
            if (componentOptions.ApiTokenIssuer == null) return null;
            if (componentOptions.ApiTokenAudience == null) return null;

            var authState = await authenticationStateProvider.GetAuthenticationStateAsync();
            var claimsIdentity = (ClaimsIdentity)authState.User.Identity;
            var td = new SecurityTokenDescriptor
            {
                Subject = claimsIdentity,
                Expires = DateTime.UtcNow.AddDays(7),
                Issuer = componentOptions.ApiTokenIssuer,
                Audience = componentOptions.ApiTokenAudience,
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(componentOptions.ApiTokenKey)), SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(td);

            return tokenHandler.WriteToken(token);

        }

    }


}
