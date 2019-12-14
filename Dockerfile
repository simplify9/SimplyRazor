FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["SW.SimplyRazor.SampleWeb/SW.SimplyRazor.SampleWeb.csproj", "SW.SimplyRazor.SampleWeb/"]
COPY ["SW.BogusDataModels/SW.BogusDataModels.csproj", "SW.BogusDataModels/"]
COPY ["SW.SimplyRazor/SW.SimplyRazor.csproj", "SW.SimplyRazor/"]
COPY ["nuget.config", "nuget/"]
RUN dotnet restore "SW.SimplyRazor.SampleWeb/SW.SimplyRazor.SampleWeb.csproj" --configfile nuget/nuget.config
COPY . .
WORKDIR "/src/SW.SimplyRazor.SampleWeb"
RUN dotnet build "SW.SimplyRazor.SampleWeb.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SW.SimplyRazor.SampleWeb.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SW.SimplyRazor.SampleWeb.dll"]