using Newtonsoft.Json;
using SW.PrimitiveTypes;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace SW.SimplyRazor
{
    public static class NotifyServiceExtensions
    {
        async public static Task NotifyOnApiResult(this NotifyService notify, ApiResult result)
        {
            if (result.StatusCode == 400)
            {
                var messages = JsonConvert.DeserializeObject<Dictionary<string, IEnumerable<string>>>(result.Body);
                bool notified = false;

                foreach (var kvp in messages)

                    if (kvp.Key.StartsWith("Field."))
                    {
                        var fieldName = kvp.Key.Split(new char[] { '.' }, 2)[1];
                        var removeIndex = fieldName.IndexOf("[");
                        if (removeIndex > 0) fieldName = fieldName.Remove(removeIndex);

                        await notify.Publish(new InvalidFieldNotification
                        {
                            Message = string.Join(", ", kvp.Value),
                        }, fieldName);

                    }
                    else
                    {
                        await notify.Publish(new UserMessage
                        {
                            Body = string.Join(",", kvp.Value),
                            Level = AlertLevel.Warning,

                        });

                        notified = true;
                    }

                if (!notified)

                    await notify.Publish(new UserMessage
                    {
                        Body = "Validation failed.",
                        Level = AlertLevel.Warning
                    });
            }

            else if (result.StatusCode == 401)
            {
                await notify.Publish(new UserMessage
                {
                    Body = "Unauthorized.",
                    Level = AlertLevel.Warning
                });
            }

            else if (result.StatusCode > 400 && result.StatusCode < 500)
            {
                await notify.Publish(new UserMessage
                {
                    Body = $"Error ({result.StatusCode}): ...",
                    Level = AlertLevel.Warning,

                });

            }
            else if (result.StatusCode == 0 || result.StatusCode >= 500)
            {
                await notify.Publish(new UserMessage
                {
                    Body = $"Error ({result.StatusCode}): {(result.Body ?? "...")}",
                    Level = AlertLevel.Error
                });
            }
        }
    }
}
