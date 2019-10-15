FROM mcr.microsoft.com/dotnet/core/aspnet:3.0-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.0-buster AS build
WORKDIR /src
COPY ["BlazorLob3/BlazorLob3.csproj", "BlazorLob3/"]
RUN dotnet restore "BlazorLob3/BlazorLob3.csproj"
COPY . .
WORKDIR "/src/BlazorLob3"
RUN dotnet build "BlazorLob3.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "BlazorLob3.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "BlazorLob3.dll"]