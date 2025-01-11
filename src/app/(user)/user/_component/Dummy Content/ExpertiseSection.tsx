import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const ExpertiseSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Expertise</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="mb-2 text-sm font-medium">Industry</h4>
            <div className="flex gap-2">
              <Badge
                variant="secondary"
                className="px-3 py-2 bg-white border-[#0E266C] border-2 text-md text-[#0E266C] font-bold "
              >
                Design
              </Badge>
              <Badge
                variant="secondary"
                className="px-3 py-2 bg-white border-[#0E266C] border-2 text-md text-[#0E266C] font-bold "
              >
                Development
              </Badge>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-sm font-medium">Language</h4>
            <div className="flex gap-2">
              <Badge
                className="px-3 py-2 bg-white border-[#0E266C] border-2 text-md text-[#0E266C] font-bold "
                variant="outline"
              >
                Bangla
              </Badge>
              <Badge
                className="px-3 py-2 bg-white border-[#0E266C] border-2 text-md text-[#0E266C] font-bold "
                variant="outline"
              >
                English
              </Badge>
              <Badge
                className="px-3 py-2 bg-white border-[#0E266C] border-2 text-md text-[#0E266C] font-bold "
                variant="outline"
              >
                French
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
